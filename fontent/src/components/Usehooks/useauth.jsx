import { useContext } from 'react';
import { Authconext } from '../UseContaxt/UseContaxt';

const useauth = () => {
    const all=useContext(Authconext)
    return all
};

export default useauth;