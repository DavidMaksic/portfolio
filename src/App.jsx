import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { DarkModeProvider } from './contexts/DarkModeContext';

import PageNotFound from './ui/PageNotFound';
import Casamento from './ui/projects/casamento/Casamento';
import EthosBlog from './ui/projects/ethos-blog/EthosBlog';
import EthosCMS from './ui/projects/ethos-cms/EthosCMS';
import UseGames from './ui/projects/use-games/useGames';
import Artfolio from './ui/projects/artfolio/Artfolio';
import Yakuza from './ui/projects/yakuza/Yakuza';
import VSCode from './ui/projects/vscode/VSCode';
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
                  <Route path="/ethos-cms" element={<EthosCMS />} />
                  <Route path="/casamento" element={<Casamento />} />
                  <Route path="/artfolio" element={<Artfolio />} />
                  <Route path="/timer" element={<Timer />} />
                  <Route path="/use-games" element={<UseGames />} />
                  <Route path="/blog" element={<Blog />} />
                  <Route path="/yakuza" element={<Yakuza />} />
                  <Route path="/vscode" element={<VSCode />} />
               </Route>

               <Route path="*" element={<PageNotFound />} />
            </Routes>
         </BrowserRouter>
      </DarkModeProvider>
   );
}

export default App;
