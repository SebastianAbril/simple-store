import {Column} from '../components/Column.js';
import {Header} from '../components/Header.js';
import {ImageButtonCard} from '../components/ImageButtonCard.js';
import { Row } from '../components/Row.js';

export function HomeScreen() {

    const imageButtonCard4 = ImageButtonCard({style: { width: '20%'}});
    const imageButtonCard5 = ImageButtonCard({style: { width: '20%'}});
    const imageButtonCard6 = ImageButtonCard({style: { width: '20%'}});
    const imageButtonCard7 = ImageButtonCard({style: { width: '20%'}});

    const column = Column({
        children: [
            Header(),
            Row({
                style: {
                    backgroundColor: 'white',
                    marginBottom: '60px'
                },
                children:[
                    ImageButtonCard({style: { width: '100%'}})
                ]
            }),
            Row({
                style: {
                    justifyContent: 'space-between',
                    backgroundColor: 'white',
                    marginBottom: '60px'
                },
                children:[
                    ImageButtonCard({style: { width: '48%'}}), 
                    ImageButtonCard({style: { width: '48%'}})
                ]
            }),
            Row({
                children: [imageButtonCard4, imageButtonCard5, imageButtonCard6, imageButtonCard7,],
                style: {
                    justifyContent:'space-between',
                    backgroundColor: 'white'
                }
            })
        ]
    });
        
    return column;    
};

