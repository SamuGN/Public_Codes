using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace BL
{
    public class Venta
    {
        private string customer;
        private DateTime date;
        private List<Article> products;

        public List<Article> Products
        {
            get { return products; }
        }

        public Venta(string cliente)
        {
            this.customer = cliente;
            this.date = DateTime.Now;
            this.products = new List<Article>();

        }

       

        public void AddProduct(Article article)
        {
            products.Add(article);
        }

        public decimal Total()
        {
            decimal total = 0;
            foreach (Article article in products)
            {
                total += article.Value;
            }
            return total;
        }
    }
}
