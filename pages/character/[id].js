import React from 'react';

export default function CharacterItem({info}) {
    return (
        <div>
            <p>Personagem: {info.name}</p>
        </div>
    );
}

export async function getServerSideProps(context) {
    const res = await fetch(`http://localhost:3000/api/search${context.params.id}`);
    const json = await res.json()

    return {
        props: {
            info: json.info
        }
    };
}