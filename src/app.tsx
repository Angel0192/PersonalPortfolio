import WebView from './views/web/webView'
import {useMediaQuery}from 'react-responsive'
import MobileView from './views/mobile/mobileView'

function App(){
    const isMobile = useMediaQuery({query: '(max-width: 767px)'})

    return isMobile ? <MobileView/> : <WebView/>
}

export default App;