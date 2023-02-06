using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace MissionFourMJ.Models
{
    public class GradeCalculatorModel
    {
        [Required]
        [Range(0, 100)] // Validation in the model to ensure the user enters a number between 0 and 100
        public byte Assignments { get; set; }
        [Required]
        [Range(0, 100)]
        public byte Projects { get; set; }
        [Required]
        [Range(0, 100)]
        public byte Quizzes { get; set; }
        [Required]
        [Range(0, 100)]
        public byte Midterm { get; set; }
        [Required]
        [Range(0, 100)]
        public byte Final { get; set; }
        [Required]
        [Range(0, 100)]
        public byte Intex { get; set; }
    }
}
