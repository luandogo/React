import { useFetchGifs } from "../../hooks/useFetchGifs";
import { renderHook } from '@testing-library/react-hooks';


describe('Test in useFetchGifs hook', () => {

    test('should return the initial state', async() => {

        const { result, waitForNextUpdate } = renderHook( () => useFetchGifs( 'One Piece' ) );
        const { data, loading } = result.current;
        
        await waitForNextUpdate();
        expect( data ).toEqual([]);
        expect( loading ).toBe(true); 
    });

    test('should return an images array and the loading in false', async() => {

        const { result, waitForNextUpdate } = renderHook( () => useFetchGifs( 'One Piece' ) );
        await waitForNextUpdate();
        const { data, loading } = result.current;
        
        expect( data.length ).toBe(10);
        expect( loading ).toBe(false); 
        
    })
    
    
});