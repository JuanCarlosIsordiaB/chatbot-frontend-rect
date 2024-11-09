import { createBrowserRouter, Navigate } from "react-router-dom";
import {
  AssistantPage,
  AudioToTextPage,
  ImageGenerationPage,
  ImageTunningPage,
  ProsConsPage,
  ProsConsStreamPage,
  SpellingCheckerPage,
  TextToAudioPage,
  TranslatePage,
} from "../pages";
import { DashboardLayout } from "../layouts/DashboardLayout";

export const menuRoutes = [
  {
    to: "/image-generation",
    icon: "fa-solid fa-image",
    title: "Generate Images",
    description: "Generate Images",
    component: <ImageGenerationPage />,
  },
  {
    to: "/text-to-audio",
    icon: "fa-solid fa-podcast",
    title: "Text to audio",
    description: "Covert text to audio",
    component: <TextToAudioPage />,
  },
  {
    to: "/audio-to-text",
    icon: "fa-solid fa-comment-dots",
    title: "Audio to text",
    description: "Convert audio to text",
    component: <AudioToTextPage />,
  },
  {
    to: "/translate",
    icon: "fa-solid fa-language",
    title: "Translate",
    description: "Translate to other languages",
    component: <TranslatePage />,
  },
  {
    to: "/spelling",
    icon: "fa-solid fa-spell-check",
    title: "Spelling",
    description: "Spell Checker",
    component: <SpellingCheckerPage />,
  },
  {
    to: "/pros-cons-stream",
    icon: "fa-solid fa-water",
    title: "Comparisons",
    description: "With message stream",
    component: <ProsConsStreamPage />, // The function of this is 
  },
  
  {
    to: "/assistant",
    icon: "fa-solid fa-user",
    title: "Shop Assistant 24/7",
    description: "Information assistant",
    component: <AssistantPage />,
  },
];

export const router = createBrowserRouter([
  {
    path: "/",
    element: <DashboardLayout />,
    children: [
      ...menuRoutes.map((router) => ({
        path: router.to,
        element: router.component,
        
      })),
      {
        path: "",
        element: <Navigate to={menuRoutes[0].to} />,
      }
    ],
  },
]);
