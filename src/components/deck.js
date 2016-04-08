import {Card} from './UI';
const deck = (element, board) => {
    const getCoordinates = (originalRight, originalWidth, originalHeight) => {
        const ORIGINAL_WIDTH = 1100;
        const ORIGINAL_HEIGHT = 700;
        const left = Math.ceil(board.width * (ORIGINAL_WIDTH - originalRight) / ORIGINAL_WIDTH);
        const width = Math.ceil(board.width * originalWidth / ORIGINAL_WIDTH);
        const height = Math.ceil(width * originalHeight / originalWidth);
        const maxHeight = Math.ceil(width * ORIGINAL_HEIGHT / originalWidth);
        const top = Math.ceil((maxHeight - height) / 2);
        return {left, top, width, height};
    };

    const firstCard = () => {
        const ORIGINAL_RIGHT = 1041;
        const ORIGINAL_FIRST_WIDTH = 260;
        const ORIGINAL_FIRST_HEIGHT = 359;
        const coordinates = getCoordinates(ORIGINAL_RIGHT, ORIGINAL_FIRST_WIDTH, ORIGINAL_FIRST_HEIGHT);
        return Card(Object.assign(coordinates, {className: 'firstCard'}));
    };

    const secondCard = () => {
        const ORIGINAL_RIGHT = 1019;
        const ORIGINAL_FIRST_WIDTH = 286;
        const ORIGINAL_FIRST_HEIGHT = 394;
        const coordinates = getCoordinates(ORIGINAL_RIGHT, ORIGINAL_FIRST_WIDTH, ORIGINAL_FIRST_HEIGHT);
        return Card(Object.assign(coordinates, {className: 'secondCard'}));
    };

    const thirdCard = () => {
        const ORIGINAL_RIGHT = 957;
        const ORIGINAL_FIRST_WIDTH = 325;
        const ORIGINAL_FIRST_HEIGHT = 450;
        const coordinates = getCoordinates(ORIGINAL_RIGHT, ORIGINAL_FIRST_WIDTH, ORIGINAL_FIRST_HEIGHT);
        return Card(Object.assign(coordinates, {className: 'thirdCard'}));
    };

    const centralCard = () => {
        const ORIGINAL_RIGHT = 847;
        const ORIGINAL_FIRST_WIDTH = 406;
        const ORIGINAL_FIRST_HEIGHT = 560;
        const coordinates = getCoordinates(ORIGINAL_RIGHT, ORIGINAL_FIRST_WIDTH, ORIGINAL_FIRST_HEIGHT);
        return Card(Object.assign(coordinates, {className: 'centralCard'}));
    };


    const bigCard = () => {
        const ORIGINAL_RIGHT = 483;
        const ORIGINAL_FIRST_WIDTH = 460;
        const ORIGINAL_FIRST_HEIGHT = 633;
        const coordinates = getCoordinates(ORIGINAL_RIGHT, ORIGINAL_FIRST_WIDTH, ORIGINAL_FIRST_HEIGHT);
        return Card(Object.assign(coordinates, {className: 'bigCard'}));
    };


    const render = (state) => {


        while (element.firstChild) {
            element.removeChild(element.firstChild);
        }
        const cards = [firstCard(),
            secondCard(),
            thirdCard(),
            centralCard(),
            bigCard()];
        cards.forEach(card => element.appendChild(card));

    };
    return {render};
}

export default deck;