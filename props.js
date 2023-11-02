const SimpleComponent = ({ requiredProps }) => {
 return (
   <>
     {requiredProps ? (
       <h1>We need this {requiredProps} !</h1>
     ) : (
       <h1>Ooops ! we need that props</h1>
     )}
   </>
 );
};
