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
    to: "/spelling",
    icon: "fa-solid fa-spell-check",
    title: "Spelling",
    description: "Spell Checker",
    component: <SpellingCheckerPage />,
  },
  {
    to: "/pros-cons",
    icon: "fa-solid fa-code-compare",
    title: "Pros & Cons",
    description: "Compare pros and cons",
    component: <ProsConsPage />,
  },
  {
    to: "/pros-cons-stream",
    icon: "fa-solid fa-water",
    title: "Como stream",
    description: "With message stream",
    component: <ProsConsStreamPage />, // The function of this is 
  },
  {
    to: "/translate",
    icon: "fa-solid fa-language",
    title: "Translate",
    description: "Translate to other languages",
    component: <TranslatePage />,
  },
  {
    to: "/text-to-audio",
    icon: "fa-solid fa-podcast",
    title: "Text to audio",
    description: "Covert text to audio",
    component: <TextToAudioPage />,
  },
  {
    to: "/image-generation",
    icon: "fa-solid fa-image",
    title: "Images",
    description: "Generate Images",
    component: <ImageGenerationPage />,
  },
  {
    to: "/image-tunning",
    icon: "fa-solid fa-wand-magic",
    title: "Edit Images",
    description: "Continuous generation of images",
    component: <ImageTunningPage />,
  },
  {
    to: "/audio-to-text",
    icon: "fa-solid fa-comment-dots",
    title: "Audio to text",
    description: "Convert audio to text",
    component: <AudioToTextPage />,
  },
  {
    to: "/assistant",
    icon: "fa-solid fa-user",
    title: "Assistant",
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
