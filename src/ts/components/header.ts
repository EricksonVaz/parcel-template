import logo from "url:../../img/parcelLogo.png?width=50";

export default function headerElement(){
    return`
        <header class="navbar navbar-expand-sm navbar-dark bg-dark">
            <div class="navbar-brand">
                <img src="${logo}" alt="logo parcel" class"nav-logo">
            </div>
            <button type="button" class="navbar-toggler" data-toggle="collapse" data-target="#main-menu">
                <span class="navbar-toggler-icon"></span>
            </button>
            <nav id="main-menu" class="collapse navbar-collapse justify-content-end">
                <ul class="navbar-nav">
                    <li class="nav-item">
                        <a href="#" class="nav-link font-weight-bold">Home</a>
                    </li>
                    <li class="nav-item">
                        <a href="#" class="nav-link" class="nav-link font-weight-bold">Contact</a>
                    </li>
                    <li class="nav-item">
                        <a href="#" class="nav-link" class="nav-link font-weight-bold">About</a>
                    </li>
                </ul>
            </nav>
        </header>
    `;
}