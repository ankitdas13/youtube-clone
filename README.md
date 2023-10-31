# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh


<div className='flex'>
              <div className='flex px-4 py-2 rounded-l-full bg-slate-100 border border-stone-400'>
                <BiLike size={25}/>
                <div>{formatNumber(videoDetail?.statistics?.likeCount,0)}</div>
              </div>
              <div className='flex px-4 py-2 rounded-r-full bg-slate-100 border border-stone-400'>
                <BiDislike size={25}/>
              </div>
            </div>