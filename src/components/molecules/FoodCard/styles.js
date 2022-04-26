import styled from 'styled-components/native';
import {Box, Touchable} from '~/components' 

export const AvatarContainer = styled(Box).attrs( props => {
    h: "100%",
    w: "30%",
    alingItems:'center',
    justifyContent: 'center',
    {...props}
})
export const TextContainer = styled(Box).attrs( props => {
    w= "70%";
    height: "100%";
    flexDir: 'column';
    alignItems: 'flex-start';
    justifyContent: 'center',
    {...props}

})