import PropTypes from 'prop-types';

export const PrimerComponente = ({ titulo, subtitulo }) => {
  return (
    <>
      <h1>{titulo}</h1>
      <h2>{subtitulo}</h2>
    </>
  );
};

PrimerComponente.propTypes = {
  titulo: PropTypes.string.isRequired,
  subtitulo: PropTypes.string.isRequired
};

