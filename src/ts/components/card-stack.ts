import "@fortawesome/fontawesome-free/js/all";

export default function cardStack(srcImg,text,urlDocs,urlRepo):string{
    return`
        <div class="card">
            <img src="${srcImg}" alt="img stak">
            <div class="card-body">
                <p class="card-text">
                    ${text}
                </p>
                <a href="${urlDocs}" target="_blank" class="btn btn-block btn-primary">
                    <i class="fas fa-book"></i>
                    Doc
                </a>
                <a href="${urlRepo}" target="_blank" class="btn btn-block btn-success">
                    <i class="fab fa-github-square"></i>
                    Repo
                </a>
            </div>
        </div>
    `
}