import {Container} from '../components/Container.js';
import {Header} from '../components/Header.js';

export function HomeScreen() {
    const header = Header();
    const container = Container({children: [header]});
        
    return container;    
}

