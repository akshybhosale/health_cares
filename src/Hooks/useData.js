import { useEffect, useState } from 'react';

const useData = () => {
    const [loadData, setloadData] = useState([]);

    useEffect(() => {
        async function fetchData() {
            await fetch('../fakedata/healthcaredb.json')
                .then(resp => resp.json())
                .then(data => setloadData(data.services))
                // .then(data => console.log(data))

        }
        fetchData();
    }, []);

    return [loadData];
}


export default useData;