import React from "react";
import {Match} from "../../types/match";


export default function form(setMatches: Function, matches: Match[]): React.ReactElement {
    const add = async (event: React.MouseEvent<HTMLButtonElement>) => {
        event.preventDefault();

        const input = {
            MatchType: document.querySelector('input[name="match-type"]:checked') as HTMLInputElement,
            MatchFormat: document.querySelector('input[name="match-format"]:checked') as HTMLInputElement,
            Match: document.getElementById('match') as HTMLInputElement,
            SchoolA: document.getElementById("schoolA") as HTMLInputElement,
            SchoolB: document.getElementById("schoolB") as HTMLInputElement,
            PlayerA1: document.getElementById("playerA1") as HTMLInputElement,
            PlayerB1: document.getElementById("playerB1") as HTMLInputElement,
            PlayerA2: document.getElementById("playerA2") as HTMLInputElement,
            PlayerB2: document.getElementById("playerB2") as HTMLInputElement,
            Game1A: document.getElementById("game1A") as HTMLInputElement,
            Game1B: document.getElementById("game1B") as HTMLInputElement,
            Game2A: document.getElementById("game2A") as HTMLInputElement,
            Game2B: document.getElementById("game2B") as HTMLInputElement,
            Game3A: document.getElementById("game3A") as HTMLInputElement,
            Game3B: document.getElementById("game3B") as HTMLInputElement,
        };
        // if(input.MatchType === null ||
        //     input.MatchFormat === null ||
        //     input.Match === null || input.Match.value === '' ||
        //     input.SchoolA === null || input.SchoolA.value === '' ||
        //     input.SchoolB === null || input.SchoolB.value === '' ||
        //     input.PlayerA1 === null || input.PlayerA1.value === '' ||
        //     input.PlayerB1 === null || input.PlayerB1.value === '') {
        //     alert('Please fill out all required fields')
        //     return
        // }
        const json = {
            MatchType: input.MatchType.value,
            MatchFormat: input.MatchFormat.value,
            Match: input.Match.value,
            SchoolA: input.SchoolA.value,
            SchoolB: input.SchoolB.value,
            PlayerA1: input.PlayerA1.value,
            PlayerB1: input.PlayerB1.value,
            PlayerA2: input.PlayerA2.value,
            PlayerB2: input.PlayerB2.value,
            Game1A: input.Game1A.value,
            Game1B: input.Game1B.value,
            Game2A: input.Game2A.value,
            Game2B: input.Game2B.value,
            Game3A: input.Game3A.value,
            Game3B: input.Game3B.value,
        }
        const body = JSON.stringify( json )
        console.log(body)

        const response = await fetch( '/add', {
            method:'POST',
            headers: { 'Content-Type': 'application/json' },
            body
        })
        const data = await response.json()
        console.log(data)
        setMatches([...matches, data]);
        console.log(matches)
    }


    return <form>
        <h2 className="is-size-4 is-flex is-justify-content-start is-align-items-start has-text-weight-semibold">Match
            Formatting:</h2>
        <div className="is-flex is-flex-direction-row is-justify-content-space-between ">
            <div className="is-flex is-flex-direction-column">
                <h3>Match Type:</h3>
                <div className="flex-horizontal">
                    <input type="radio" id="round-robin" name="match-type" value="Round Robin" required/>
                    <label htmlFor="round-robin">Round Robin</label>
                </div>
                <div className="is-flex is-flex-direction-row">
                    <input type="radio" id="elimination" name="match-type" value="Elimination" required/>
                    <label htmlFor="elimination">Elimination</label>
                </div>
            </div>


            <div className="is-flex is-flex-direction-column">
                <h3 className="pb-1">Match Format:</h3>
                <div className="is-flex is-flex-direction-row">
                    <input type="radio" id="singles" name="match-format" value="singles" required/>
                    <label htmlFor="singles">Singles</label>
                </div>
                <div className="is-flex is-flex-direction-row">
                    <input type="radio" id="doubles" name="match-format" value="doubles" required/>
                    <label htmlFor="doubles">Doubles</label>
                </div>
            </div>


            <div className="is-flex is-justify-content-start is-flex-direction-column">
                <label className="pb-1">Match:</label>
                <div className="select">
                    <select aria-label="What Match Group is this for i.e. Singles 3" id="match" name="match"
                            required>
                        <option value="">Choose Match Type</option>
                        <option value="Singles 1">Singles 1</option>
                        <option value="Singles 2">Singles 2</option>
                        <option value="Singles 3">Singles 3</option>
                        <option value="Singles 4">Singles 4</option>
                        <option value="Doubles 1">Doubles 1</option>
                        <option value="Doubles 2">Doubles 2</option>
                        <option value="Doubles 3">Doubles 3</option>
                    </select>
                </div>
            </div>
        </div>
        <datalist id="schools">
            <option value="SAN">Sandburg</option>
            <option value="AND">Andrew</option>
            <option value="NT">New Trier</option>
            <option value="DGN">Downers Grove North</option>
            <option value="FR">Fremd</option>
            <option value="HER">Hersey</option>
            <option value="HS">Hinsdale South</option>
            <option value="LT">Lockport</option>
            <option value="NN">Naperville North</option>
            <option value="DF">Deerfield</option>
            <option value="WY">Whitney Young</option>
            <option value="YK">York</option>
        </datalist>

        <div className="pt-3">

            <table>
                <tr>
                    <td><h3 className="has-text-weight-semibold is-size-4 is-flex is-justify-content-start">Scores:</h3>
                    </td>
                    <td></td>
                    <td></td>
                </tr>
                <tr>
                    <td className="p-2">Schools</td>
                    <td className="school-a">
                        <input aria-label="Input for School A" className="input" list="schools" id="schoolA"
                               name="schoolA" placeholder="Select School" required/>
                    </td>
                    <td className="school-b">
                        <input aria-label="Input for School B" className="input" list="schools" id="schoolB"
                               name="schoolB" placeholder="Select School" required/>
                    </td>
                </tr>

                <tr>
                    <td className="p-2">PLAYER 1</td>
                    <td><input aria-label="Player 1 for School A" className="input" type="text" id="playerA1"
                               name="playerA1" placeholder="NT1" required/></td>
                    <td><input aria-label="Player 1 for School B" className="input" type="text" id="playerB1"
                               name="playerB1" placeholder="AND2" required/></td>
                </tr>
                <tr>
                    <td className="p-2">PLAYER 2</td>
                    <td><input aria-label="Player 2 for School A" className="input" type="text" id="playerA2"
                               name="playerA2" placeholder="NT2"/></td>
                    <td><input aria-label="Player 2 for School B" className="input" type="text" id="playerB2"
                               name="playerB2" placeholder="AND4"/></td>
                </tr>

                <tr>
                    <td className="p-2">GAME 1</td>
                    <td><input aria-label="Game 1 Score for School A" id="game1A" className="input" type="number"
                               name="game1A" min={0} placeholder={"0"} required/></td>
                    <td><input aria-label="Game 1 Score for School B" id="game1B" className="input" type="number"
                               name="game1B" min={0} placeholder={"0"} required/></td>
                </tr>
                <tr>
                    <td className="p-2">GAME 2</td>
                    <td><input aria-label="Game 2 Score for School A" id="game2A" className="input" type="number"
                               name="game2A" min={0} placeholder={"0"} required/></td>
                    <td><input aria-label="Game 2 Score for School B" id="game2B" className="input" type="number"
                               name="game2B" min={0} placeholder={"0"} required/></td>
                </tr>
                <tr>
                    <td className="p-2">GAME 3</td>
                    <td><input aria-label="Game 3 Score for School A" id="game3A" className="input" type="number"
                               name="game3A" min={0} placeholder={"0"}/></td>
                    <td><input aria-label="Game 3 Score for School B" id="game3B" className="input" type="number"
                               name="game3B" min={0} placeholder={"0"}/></td>
                </tr>
            </table>
        </div>
        <div className="mt-2 submit-clear flex-horizontal is-justify-content-end is-align-items-end">
            <button type="button" id="add" className="button is-link" value="Submit" onClick={add}>Submit</button>
            <button type="reset" className="ml-2 button is-link is-light">Clear</button>
        </div>
    </form>
}