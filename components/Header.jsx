import globeImg from "../images/globe.png"
export default function Header() {
    return (
        <header>
            <img src={globeImg} alt="globe icon" />
            <h1>my travel journal.</h1>
        </header>
    )
}