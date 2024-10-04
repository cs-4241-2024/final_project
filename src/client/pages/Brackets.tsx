import Bracket from "../components/bracket/bracket";
import BracketColumn from "../components/bracket/bracketColumn";

export default function Brackets() {
    return (
        <div>
            <h1 className={"text-6xl"}>Brackets</h1>

            <div className={"grid grid-cols-5"}>
                <BracketColumn round={"preliminary"}>
                    {/*Top Half*/}
                    <Bracket name={"FR"} subtitle={"1A"}/>
                    <Bracket name={"BYE"} subtitle={"BYE"}/>
                    <Bracket name={"HER"} subtitle={"5A"}/>
                    <Bracket name={"DF"} subtitle={"4B"}/>
                    <Bracket name={"NT"} subtitle={"3A"}/>
                    <Bracket name={"WY"} subtitle={"6B"}/>
                    <Bracket name={"BYE"} subtitle={"BYE"}/>
                    <Bracket name={"YK"} subtitle={"2B"}/>

                </BracketColumn>
                <BracketColumn round={"quarter"}>
                    {/*Top Half*/}
                    <Bracket name={"1"}></Bracket>
                    <Bracket name={"2"}></Bracket>
                    <Bracket name={"3"}></Bracket>
                    <Bracket name={"4"}></Bracket>
                </BracketColumn>
                <BracketColumn round={"semi"}>
                    <Bracket name={"1"}></Bracket>
                    <Bracket name={"2"}></Bracket>
                </BracketColumn>
                <BracketColumn round={"final"}>
                    <Bracket name={"Winner of Top Half"}></Bracket>
                </BracketColumn>
                <div className={"col-start-1 col-span-4 flex flex-col justify-center"}>
                    <h2 className={"text-3xl"}>Top Half</h2>
                    <span className={" border-2 border-dashed border-white relative h-1 w-full"}/>
                    <h2 className={"text-3xl"}>Bottom Half</h2>
                </div>

                <BracketColumn className="col-start-5" round={"winner"}>
                    <Bracket name={"Winner"} subtitle={"1st Place"}></Bracket>
                </BracketColumn>
                {/*Bottom Half*/}
                <BracketColumn round={"preliminary"}>
                    <Bracket name={"Seed 2A"} subtitle={"2A"}/>
                    <Bracket name={"BYE"} subtitle={"BYE"}/>
                    <Bracket name={"Seed 6A"} subtitle={"6A"}/>
                    <Bracket name={"Seed 3B"} subtitle={"3B"}/>
                    <Bracket name={"Seed 4A"} subtitle={"4A"}/>
                    <Bracket name={"Seed 5B"} subtitle={"5B"}/>
                    <Bracket name={"BYE"} subtitle={"BYE"}/>
                    <Bracket name={"Seed 1B"} subtitle={"1B"}/>
                </BracketColumn>
                <BracketColumn round={"quarter"}>
                    <Bracket name={"5"}></Bracket>
                    <Bracket name={"6"}></Bracket>
                    <Bracket name={"7"}></Bracket>
                    <Bracket name={"8"}></Bracket>
                </BracketColumn>
                <BracketColumn round={"semi"}>
                    <Bracket name={"7"}></Bracket>
                    <Bracket name={"8"}></Bracket>
                </BracketColumn>
                <BracketColumn round={"final"}>
                    <Bracket name={"Winner of Bottom Half"}></Bracket>
                </BracketColumn>
            </div>
            <h1 className={"text-5xl"}> 3rd Place</h1>
            <div className={"grid grid-cols-5"}>
                <BracketColumn className={"col-start-5"}>
                    <Bracket subtitle={"3rd Place Contender"}/>
                    <Bracket subtitle={"3rd Place Contender"}/>
                </BracketColumn>
                <BracketColumn>
                    <Bracket subtitle={"3rd Place"}/>
                </BracketColumn>
            </div>

        </div>
    )
}