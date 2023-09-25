import { TypeAnimation } from 'react-type-animation';

const TypeAnimation1 = () => {
    return (
        <> 
      <TypeAnimation
        sequence={[
          // Same substring at the start will only be typed out once, initially
          'Inovação',
          1000, // wait 1s before replacing "Mice" with "Hamsters"
          'Tecnologia',
          1000,
          'Solução de ponta',
          1000,
          'KS Solutions',
          1000
        ]}
        wrapper="span"
        speed={50}
        style={{ fontSize: '4.35em', display: 'inline-block', fontWeight: '500', color:'#040916' }}
        repeat={Infinity}
      />
      </>
    );
  };

  export default TypeAnimation1;