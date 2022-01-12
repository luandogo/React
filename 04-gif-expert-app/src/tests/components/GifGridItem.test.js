import React from 'react';
import { shallow } from "enzyme";
import { GifGridItem } from '../../components/GifGridItem';

describe('Tests in <GifGridItem />', () => {

    const title = 'title';
    const url = 'https://localhost:something.jpg';

    const wrapper = shallow( <GifGridItem title={ title } url={ url }/> )

    
    
    test('should be displayed correctly.', () => {
        
        expect( wrapper ).toMatchSnapshot();
        });
    
    test('should have a paragraph with the title.', () => {

        const p = wrapper.find('p');
        expect( p.text().trim() ).toBe( title );
        
    });

    test('should have the image of the url and alt from props.  ', () => {

        const img = wrapper.find( 'img' );
        // console.log( img.props() )
        expect( img.prop('src') ).toBe(url);
        expect( img.prop('alt') ).toBe(title);        
    });

    test('should have animate__fadeIn', () => {

        const div = wrapper.find( 'div' );
        const className = div.prop('className');

        expect( className.includes('animate__fadeIn')).toBe( true );
        
    });
    
    
    

    }
 );