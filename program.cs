using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace InterviewTest
{
    class Program
    {
        static void Main(string[] args)
        {
            // The code provided will print ‘Hello World’ to the console.
            // Press Ctrl+F5 (or go to Debug > Start Without Debugging) to run your app.
            //Gievn a time (hour and minute) find out the angle between the two hands.

            //5:30

            //12
            //360 degrees

            //30 degrees
            //5 minutes

            //30 / 60
            //.5 degrees

            double hour = 12;
            double minutes = 00;

            double angleHour = hour * 30 + .5 * minutes;
            double angleMinutes = (minutes / 5) * 30;

            double angle1 =Math.Abs(angleHour - angleMinutes);
            double angle2 =Math.Abs(angleMinutes - angleHour);

            if (angle1 < angle2)
            {
                Console.WriteLine(angle1);
            }
            else
            {
                Console.WriteLine(angle2);
            }
            
            Console.ReadKey();

            // Go to http://aka.ms/dotnet-get-started-console to continue learning how to build a console app! 
        }
    }
}
