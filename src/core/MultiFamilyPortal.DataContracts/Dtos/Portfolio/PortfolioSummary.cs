using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using MultiFamilyPortal.Data.Models;

namespace MultiFamilyPortal.Dtos.Portfolio
{
    public class PortfolioSummary
    {
        public Guid Id { get; set; }

        public string Name { get; set; }

        public string City { get; set; }

        public string State { get; set; }

        public double PurchasePrice { get; set; }

        public int Units { get; set; }

        public bool Highlighted { get; set; }

        public AssetState Status { get; set; }

        public AssetInvestorState InvestorState { get; set; }
    }
}
