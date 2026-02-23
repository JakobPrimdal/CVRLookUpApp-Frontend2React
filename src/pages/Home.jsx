import CvrSearch from '../components/CvrSearch'

export default function Home() {
    return (
        <div className='home'>
            <div className='home-text'>
                <h1>Welcome!</h1>
                <h3>Get data from any danish company!</h3>
            </div>
            <CvrSearch />
        </div>
    );
}