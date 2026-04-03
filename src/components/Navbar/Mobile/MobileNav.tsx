import './MobileNav.css'
import { navItems } from './types'


export default function MobileNav(){
    return(
        <nav className='mobile-nav'>
            <div className='mobile-nav-glass'>
                {navItems.map((item) =>(
                    <a key={item.label} href={item.href} className='mobile-nav-item'>
                        <item.icon size={20} />
                        <span className='mobile-nav-label'>{item.label}</span>
                    </a>
                ))}
            </div>
        </nav>
    )
}