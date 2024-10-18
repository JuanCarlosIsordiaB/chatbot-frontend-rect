import Markdown from 'react-markdown'

interface Props {
    text: string;
}


export const MyMessage = ({text}:Props) => {
  return (
    <div className='col-start-3 col-end-13 p-3 '>
            <div className='flex items-center justify-start flex-row-reverse'>
        <div className='flex items-center justify-center h-10 w-10 rounded-full bg-slate-400 flex-shrink-0'>
        <svg xmlns="http://www.w3.org/2000/svg" width="0.88em" height="1em" viewBox="0 0 448 512"><path fill="currentColor" d="M224 256a128 128 0 1 0 0-256a128 128 0 1 0 0 256m-45.7 48C79.8 304 0 383.8 0 482.3C0 498.7 13.3 512 29.7 512h388.6c16.4 0 29.7-13.3 29.7-29.7c0-98.5-79.8-178.3-178.3-178.3z"/></svg>
        </div>
        <div className='relative mr-3 text-sm bg-black bg-opacity-25 pt-3 pb-2 px-4 shadow rounded-xl'>
                <div>{text}</div>
        </div>
    </div>
    </div>
  )
}
