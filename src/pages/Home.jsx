import { useEffect } from "react";
import CvrSearch from '../components/CvrSearch'

export default function Home() {
    useEffect(() => {
    document.body.style.overflow = "hidden";
    
    return () => {
      document.body.style.overflow = "auto";
    };
  }, []);

    return (
        <div className='home'>
            <div className="card">
                <div className='home-text'>
                    <h1>Velkommen!</h1>
                    <h3>Find virksomhedsoplysninger med CVR-nummre.</h3>
                </div>
                <CvrSearch />
            </div>
        </div>
    );
}