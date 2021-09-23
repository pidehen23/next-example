import router from 'next/router';

export default function Custom404() {
  return  (
  <div className="w-screen h-screen flex justify-center items-center">
    <h1 className="text-2xl font-bold">404 - Page Not Found</h1>
    <button className="h-8 bg-blue-400 rounded-full px-4 ml-2 text-white" onClick={()=>router.push('/')}>page reload</button>
  </div>)
}