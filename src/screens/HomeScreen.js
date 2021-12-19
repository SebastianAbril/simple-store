import {Container} from '../components/Container.js';
import {Header} from '../components/Header.js';
import {ImageButtonCard} from '../components/ImageButtonCard.js';
import { Row } from '../components/Row.js';

export function HomeScreen() {
    const header = Header();

    const imageButtonCard1 = ImageButtonCard({style: { width: '100%'}});
    const imageButtonCard2 = ImageButtonCard({style: { width: '48%'}});
    const imageButtonCard3 = ImageButtonCard({style: { width: '48%'}});

    const container = Container({
        children: [
            header,
            Row({
                children:[imageButtonCard1]
            }),
            Row({
                children:[imageButtonCard2, imageButtonCard3], 
                style: {
                    justifyContent: 'space-between',
                    backgroundColor: 'red'
                }
            })
        ]
    });
        
    return container;    
};

