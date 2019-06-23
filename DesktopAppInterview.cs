using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.Data;
using System.Drawing;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Windows.Forms;

// This is the code for your desktop app.
// Press Ctrl+F5 (or go to Debug > Start Without Debugging) to run your app.

namespace DesktopAppInterview
{
    public partial class Form1 : Form
    {
        public Form1()
        {
            InitializeComponent();
        }

        private void linkLabel1_LinkClicked(object sender, LinkLabelLinkClickedEventArgs e)
        {
            // Click on the link below to continue learning how to build a desktop app using WinForms!
            System.Diagnostics.Process.Start("http://aka.ms/dotnet-get-started-desktop");

        }

        private void button1_Click(object sender, EventArgs e)
        {
            //give a time find out the accute angle between the two hands.

            //5:30

            //12
            //360 degrees

            //30
            //5 minutes

            //30 / 60
            //.5 degrees

            double hour = 3;
            double minutes = 00;
            hour = double.Parse(HourstextBox1.Text);
            minutes =double.Parse(MinutestextBox2.Text);
            double angleHour = hour * 30 + .5 * minutes;
            double angleMinutes = (minutes / 5) * 30;

            double angle1 = Math.Abs(angleHour - angleMinutes);
            double angle2 =Math.Abs(angleMinutes - angleHour);
            if (angle1 < angle2)
            {
                MessageBox.Show(angle1.ToString());
            }
            else
            {
                MessageBox.Show(angle2.ToString());
            }

            
        }
        private static bool isPrime2(int n)
        {
            if (n == 2)
            {
                return true;
            }
            if (n % 2 == 0)
            {
                return false;
            }
            for (int i = 3; i * i<= n;i+=2)
            {
                if (n % i== 0)
                    {
                        return false;
                    }
            }
            return true;
        }
        //Checking whether a number is prime or not
        //loop from 2 to n
        private static bool isPrime(int n)
        {
            for (int i = 2; i < n; i++)
            {
                if (n % i == 0)
                {
                    return false;
                }
            }
            return true;
        }

        private void button2_Click(object sender, EventArgs e)
        {
            bool respuesta = isPrime2(int.Parse(PrimotextBox1.Text));
            MessageBox.Show(respuesta.ToString());
        }

        private void button3_Click(object sender, EventArgs e)
        {
            //reversing a string
            string str = ReversetextBox1.Text;
         
            MessageBox.Show(reverse(str));
        }

        private static string reverse(string str)
        {
            char[] chars = str.ToCharArray();
            int j = chars.Length - 1;
            for (int i = 0; i < chars.Length / 2; i++)
            {
                char temp = chars[i];
                chars[i] = chars[j];
                chars[j] = temp;
                j--;
            }
            return new String(chars);
        }

        private void button4_Click(object sender, EventArgs e)
        {
            int rows = int.Parse(textBox1.Text);
            textBox2.Text = "";
            for (int i=0;i<rows;i++)
            {
                for (int j=0;j<i+1;j++)
                {
                    textBox2.Text += "*";
                }
                textBox2.Text += "\r\n";

            }
        }

        private void button5_Click(object sender, EventArgs e)
        {
            int num = int.Parse(multiTextbox.Text);

            for (int i = 1; i <= 10; i++)
            {
                resultadoMultiTextbox.Text +=num + " * " + i + " = " + num*i+"\r\n";
            }
        }
    }
}
