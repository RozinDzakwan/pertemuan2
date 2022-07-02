import ReactDOM from "react-dom/client";

function Welcome(props){
    return <h1>Selamat datang {props.name} yang berumur {props.umur}</h1>;
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <>
        <Welcome name="Muzayyin" umur="21" />
        <Welcome name="Burhan" umur="20" />
        <Welcome name="Rozin" umur="21" />
    </>
);