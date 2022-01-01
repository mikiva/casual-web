         namespace execution::timeout::contract
         {
            enum class Type : short
            {
               linger,      //0
               kill,        //1
               terminate    //2
            };
            
            std::ostream& operator << ( std::ostream& out, Type value);

            Type transform( const std::string& constract);
            std::string transform( Type contract);
         }