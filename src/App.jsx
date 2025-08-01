import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { DarkModeProvider } from './contexts/DarkModeContext';

import EthosBlogCMS from './ui/projects/ethosBlogCMS/EthosBlogCMS';
import PageNotFound from './ui/PageNotFound';
import Casamento from './ui/projects/casamento/Casamento';
import EthosBlog from './ui/projects/ethosBlog/EthosBlog';
import UseGames from './ui/projects/UseGames/useGames';
import Yakuza from './ui/projects/yakuza/Yakuza';
import Layout from './ui/Layout';
import Timer from './ui/projects/timer/Timer';
import Blog from './ui/projects/blog/Blog';
import Home from './ui/home/Home';
import './../i18n';

function App() {
   return (
      <DarkModeProvider>
         <BrowserRouter>
            <Routes>
               <Route element={<Layout />}>
                  <Route path="/" element={<Home />} />
                  <Route path="/ethos-blog" element={<EthosBlog />} />
                  <Route path="/ethos-blog-cms" element={<EthosBlogCMS />} />
                  <Route path="/casamento" element={<Casamento />} />
                  <Route path="/blog" element={<Blog />} />
                  <Route path="/yakuza" element={<Yakuza />} />
                  <Route path="/timer" element={<Timer />} />
                  <Route path="/use-games" element={<UseGames />} />
               </Route>

               <Route path="*" element={<PageNotFound />} />
            </Routes>
         </BrowserRouter>
      </DarkModeProvider>
   );
}

export default App;
