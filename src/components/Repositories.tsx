import { useState, useEffect } from "react";

interface Repository {
    id: number;
    name: string;
    private: boolean;
    html_url: string;
}

function Repositories() {
    const [repos, setRepos] = useState<Repository[]>([]); // here we are telling it that useState is of type Repository[]
    const [username, setUsername] = useState("");

    // useEffect(() => {
    //     fetch("https://api.github.com/users/misn0147/repos?per_page=100")
    //         // we can explicitly cast the return value from the json() like this:
    //         // response.json() as Promise<Repository[]>
    //         .then((response) => response.json())
    //         .then((data) => setRepos(data));
    // }, []);

    // event types need to be explicitly declared
    const handleFormSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        fetch(`https://api.github.com/users/${username}/repos?per_page=100`)
            // we can explicitly cast the return value from the json() like this:
            // response.json() as Promise<Repository[]>
            .then((response) => response.json())
            .then((data) => setRepos(data));
    };

    return (
        <>
            <h2>Repositories</h2>

            <form onSubmit={handleFormSubmit}>
                {/* inline event handler parameters are implicitly typed */}
                <input
                    type="text"
                    name="username"
                    value={username}
                    onChange={(event) => setUsername(event.target.value)}
                />
                <button>Display Repos</button>
            </form>
            {repos.length > 0 && (
                <table>
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Private?</th>
                            <th>URL</th>
                        </tr>
                    </thead>
                    <tbody>
                        {repos.map((repo) => (
                            <tr key={repo.id}>
                                <td>{repo.name}</td>
                                <td>{repo.private ? "Yes" : "No"}</td>
                                <td>
                                    <a
                                        href={repo.html_url}
                                        target="_blank"
                                        rel="noreferrer"
                                    >
                                        {repo.html_url}
                                    </a>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            )}
        </>
    );
}

export default Repositories;
