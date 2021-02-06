import Card from './Card';

const Cards = () => {
    return (
        <div className='flex flex-wrap justify-around mx-auto'>
            {/* Remove the cards and import them from the server API */}
            <Card/>
            <Card/>
            <Card/>
            <Card/>
            <Card/>
        </div>
    )
}

export default Cards