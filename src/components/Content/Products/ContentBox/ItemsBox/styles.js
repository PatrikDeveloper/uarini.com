import styled from 'styled-components';


export const Wrapper = styled.div`
  color: #000;
`;

export const WrapperImg = styled.div`
  border-bottom: 3px solid #ebebeb;
  border-radius: 10px 10px 0px 0px;
  width: 100%;
  height: 300px;
  overflow: hidden;
`;

export const Image = styled.img`
  background: url('https://s2.glbimg.com/2lOtYDi3pUoKdDmwVdj3c7SnWP4=/690x388/s2.glbimg.com/tnfRQuCfvB3EmPcNWKIlf2RWNuk=/0x0:1919x1080/690x0/i.s3.glbimg.com/v1/AUTH_e84042ef78cb4708aeebdf1c68c6cbd6/internal_photos/bs/2017/M/n/2JSVtvSs6em2b4hZ8mZQ/farinha-4.jpg');
  width: 100%;
  height: 100%;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
`;

export const Content = styled.div`
  padding: 10px;
  margin: auto;
`;

export const Icon = styled.span`
  width: 18px;
  height: 18px;
  background: #ccc;
  display: inline-block;
  vertical-align: top;
`;

export const Label = styled.span`
  display: inline-block;
  vertical-align: top;
  line-height: 18px;
  font-size: 16px;
  margin-left: 20px;
  color: orange;
`;

export const Button = styled.div`
  padding: 20px;
  background: orange;
  color: white;
  border-top: 3px solid #ebebeb;
`;