import "./App.css";
import editModal, {editMatch} from "../components/editModal";
import form from "../components/form";
import {generateMatches} from "../components/matches";
import {useNavigate} from "react-router-dom";
import {useEffect, useState} from "react";

window.onload = async function() {
    // await generateMatches()
    // const changeButton = document.querySelector('input[name="changeButton"]');
    // changeButton.onclick = editMatch;
    //
    // document.querySelector('.modal-close').addEventListener('click', () => {
    //     document.getElementById('editModal').style.display = 'none';
    // });
    // document.querySelector('.cancel-modal').addEventListener('click', () => {
    //     document.getElementById('editModal').style.display = 'none';
    // });


}
async function onLogout(event: Event, navigate: Function) {

    const response = await fetch('/logout', {
        method: 'GET',
    });
    if (response.ok) {
        navigate('/');
        // window.location.href='/'; // Redirect to the root URL
    } else {
        console.error('Logout failed');
    }
}

function Dashboard() {
    const navigate = useNavigate()
    useEffect(() => {
        generateMatches();
        const changeButton = document.querySelector('input[name="changeButton"]');
        if (changeButton) {
            (changeButton as HTMLButtonElement).onclick = () => editMatch;
        }

        const modalClose = document.querySelector('.modal-close');
        const editModal = document.getElementById('editModal');
        if (modalClose && editModal) {
            modalClose.addEventListener('click', () => {
                editModal.style.display = 'none';
            });
        }

        const cancelModal = document.querySelector('.cancel-modal');
        if (cancelModal && editModal) {
            cancelModal.addEventListener('click', () => {
                editModal.style.display = 'none';
            });
        }


    }, []);
    return (
        <>
            <h1 className="title is-family-primary is-size-1 pt-6 is-flex is-flex-direction-row">Submit your Match!
                <button id="logoutButton" className="button is-info" onClick={() => onLogout}>Logout</button>
            </h1>
            <div>

                {form()}
                <div id="matches-container">

                </div>
                {editModal()}

            </div>
        </>
    );
}

export default Dashboard;