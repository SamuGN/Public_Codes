using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace BL
{
    public class Article
    {
        public int ID { get; set; }
        public string Description { get; set; }
        public decimal Price { get; set; }
        public float Amount { get; set; }

        public decimal Value { get { return Price * (decimal)Amount; } }

    }
}
