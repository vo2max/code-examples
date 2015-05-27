using System;
using System.Collections.Generic;

namespace Vo2maxFactor
{
    
    /// <summary>
    /// A program that prints the numbers from 1 to 100. For multiples of three, print "Vo2" 
    /// instead of the number and for the multiples of five print "max". For numbers 
    /// which are multiples of both three and five, print "Vo2max".
    /// </summary>
    class Century
    {
        /// <summary>
        /// Thee class constructor.
        /// </summary>
        static void Main()
        {
            // Define our 'dictionary'. Order does make a difference, as an item may have 
            // more than one 'definition'. 
            Dictionary<int, string> lookup = new Dictionary<int, string>();
            lookup.Add(3, "Vo2"); // factor, text value
            lookup.Add(5, "max");

            // Generate our desired output.
            for (int i = 1; i <= 100; i++)
            {
                Console.WriteLine(TranslateIt(i, lookup));
            }

            // keep the console window open in debug mode
            Console.WriteLine("Press any key to exit.");
            Console.ReadKey();
        }
        
        /// <summary>
        /// Translate our output, if the given item lookup has a 'definition' for its factor. 
        /// Otherwise, return the original value.
        /// </summary>
        /// <param name="i">The integer to be translated.</param>
        /// <param name="t">Dictionary mappings.</param>
        /// <returns></returns>
        private static string TranslateIt(int i, Dictionary<int, string> t)
        {
            string output = "";

            // If our 'dictionary' contains a factor, assign the value.
            foreach (KeyValuePair<int, string> entry in t)
            {
                if (i % entry.Key == 0)
                {
                    output += entry.Value;
                } 
            }

            // Default value.
            if (string.IsNullOrWhiteSpace(output))
            {
                output = i.ToString();
            }

            return output;
        }
    }
    
}