public class PasswordManager
{
   private String password;
   private String website;
   private String username;
   private String passwords;
   private char[] letters = {'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z', 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0'};
   
   public static void main(String[] args){
      
      Scanner input = new Scanner(System.in);
      System.out.println("Enter your password:");
      while(input.nextInt() != account.getPassword()){
         System.out.println("Incorrect Password. Try again.");
      }
      
      if(input.nextInt() == 0){
         
      }
      else if(input.nextInt() == 1){
      
      }
      else{
         System.out.println("Invalid response. Please type again.");
      }
   }
   
   public account(String website, String username, String password){
      this.website = website;
      this.username = username;
      this.password = password;
      
   }
   
   
}
