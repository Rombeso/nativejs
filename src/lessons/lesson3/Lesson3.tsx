import React, {useState} from 'react';
import {API} from './API';
import './lesson_3';


export const Lesson3 = () => {

    const [searchName, setSearchName] = useState('');
    const [serachResult, setSerachResult] = useState<null | any>(null);
    const [searchNameByType, setSearchNameByType] = useState('');
    const [serachResultByType, setSerachResultByType] = useState<null | any>(null);
    const [serachErorr, setSerachErorr] = useState<null | any>(null);
    const [serachErorrType, setSerachErorrType] = useState<null | any>(null);


    const searchFilm = () => {
        setSerachResult(null)
        setSerachResultByType(null)
        setSerachErorr(null)
        API.searchFilmsByTitle(searchName).then(res => {
            if (res.data.Response === "True") {
                setSerachResult(res.data)
            } else {
                setSerachErorr(res.data)
            }
        })
    };

    const searchByType = (e: React.MouseEvent<HTMLButtonElement>) => {
        const type: string = e.currentTarget.dataset.t ? e.currentTarget.dataset.t : '';
        console.log(type)
        setSerachResult(null)
        setSerachResultByType(null)
        setSerachErorr(null)
        setSerachErorrType(null)
        API.searchFilmsByType(searchNameByType, type).then(res => {
            if (res.data.Response === "True") {
                setSerachResultByType(res.data)
            } else {
                setSerachErorrType(res.data)
            }
        })
    }

    return (
        <div>
            <h1>Promises</h1>
            <div>
                <h3><p>Search by name:</p></h3>
                <input type="text" value={searchName} onChange={(e) => setSearchName(e.currentTarget.value)}/>
                <button onClick={searchFilm}>Search</button>
                {(serachResult !== null)
                    ? <div>
                        <h1>{serachResult.Title}</h1>
                        <p>Year: {serachResult.Year}</p>
                        <p>Genre: {serachResult.Genre}</p>
                        <p>Actors: {serachResult.Actors}</p>
                        <p>Plot: {serachResult.Plot}</p>
                        <img src={serachResult.Poster}/>
                    </div>
                    : ''
                }
                {(serachErorr !== null)
                    ? <h1>{serachErorr.Error}</h1>
                    : ''
                }

            </div>

            <div>
                <h3><p>Search by type:</p></h3>
                <input type="text" value={searchNameByType}
                       onChange={(e) => setSearchNameByType(e.currentTarget.value)}/>
                <button onClick={searchByType} data-t='movie'>Movie</button>
                <button onClick={searchByType} data-t='series'>Series</button>
                <div>
                    {(serachResultByType !== null)
                        ? <div>
                            <h1>{serachResultByType.Title}</h1>
                            <p>Type: {serachResultByType.Type}</p>
                            <p>Year: {serachResultByType.Year}</p>
                            <p>Genre: {serachResultByType.Genre}</p>
                            <p>Actors: {serachResultByType.Actors}</p>
                            <p>Plot: {serachResultByType.Plot}</p>
                            <img src={serachResultByType.Poster}/>
                        </div>
                        : ''
                    }
                    {(serachErorrType !== null)
                        ? <h1>{serachErorrType.Error}</h1>
                        : ''
                    }
                </div>
            </div>
        </div>
    );
}
