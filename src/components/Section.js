export const Section = () => {
    const section = document.createElement('section');
    const topSection = TopSection();

    section.append(topSection);
    return section;
};

const TopSection = (props) => {

    const topSection = document.createElement('div');
    topSection.classList.add('section');
    const image = document.createElement('img');
    image.src = "https://images.pexels.com/photos/2007/animal-dog-pet-cute.jpg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940";
    
    topSection.append(image);

    return topSection;
}





/*
const MiddleSection = () => {

}

const BotSection = () => {
    
} */