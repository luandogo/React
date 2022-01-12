import React from 'react';

import { shallow } from "enzyme";
import { GifExpertApp } from "../GifExpertApp";



describe('Tests in <GifExpertApp />', () => {


    test('should be displayed correctly', () => {
        const wrapper = shallow( <GifExpertApp/> );
        expect( wrapper ).toMatchSnapshot();
        
    }); 

    test('should display a list of categories.', () => {
        const categories = ['One Piece', 'One Punch'];
        const wrapper = shallow( <GifExpertApp defaultCategories={ categories }/> );

        expect( wrapper ).toMatchSnapshot();
        expect( wrapper.find('GifGrid').length ).toBe( categories.length );
        
    })
    
});