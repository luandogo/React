import React from 'react';
import '@testing-library/jest-dom';
import { shallow } from "enzyme";
import { GifGrid } from "../../components/GifGrid";
import { useFetchGifs } from '../../hooks/useFetchGifs';
jest.mock('../../hooks/useFetchGifs');

describe('Tests in <GifGrid />', () => {

    const category = 'One Punch Man'

    test('should be displayed correctly.', () => {
        useFetchGifs.mockReturnValue({
            data: [],
            loading: true
        });
        const wrapper = shallow( <GifGrid category={ category }/> );
        expect( wrapper ).toMatchSnapshot();
        
    });

    test('should show items when images are loaded useFetchGifs', () => {

        const gifs = [{
            id: 'ABC',
            url: 'https://localhost/something/something.jpg',
            title: 'Something'
        },{
            id: 'ABC123',
            url: 'https://localhost/something/something.jpg',
            title: 'Something'
        }];

        useFetchGifs.mockReturnValue({
            data: gifs,
            loading: false
        });
        
        
        const wrapper = shallow( <GifGrid category='{ category }'/> );

        expect( wrapper ).toMatchSnapshot();
        expect( wrapper.find('p').exists() ).toBe(false);        
        expect( wrapper.find('GifGridItem').length ).toBe( gifs.length );
    });
    
    
 
});