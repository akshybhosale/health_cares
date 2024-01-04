import { useEffect, useState } from 'react';

const useDocData = () => {
    const [docData, setDocData] = useState([]);

    useEffect(() => {
        async function fetchData() {
            await fetch('../../fakedata/doctordb.json')
                .then(resp => resp.json())
                .then(data => setDocData(data.docs));
        }
        fetchData();
    }, []);

    return [docData];
}


export default useDocData;