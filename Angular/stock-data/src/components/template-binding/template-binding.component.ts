import { CommonModule } from "@angular/common";
import  { Component } from "@angular/core";
import IEmployeeDirector from "../../interfaces/appInterface";
import { HttpClient, HttpClientModule } from "@angular/common/http";
import { FormsModule } from "@angular/forms";

@Component({
  selector: "template-binding",
  templateUrl: "template-binding.component.html",
  styleUrl: "template-binding.component.less",
  standalone: true,
  imports: [CommonModule, HttpClientModule, FormsModule]
})
export class TemplateBindingComponent {
  userDetails: IEmployeeDirector[] = [];
  employeeName: string = ""
  employeeAge: number = 0;
  employeeSalary: number = 0

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.http.get("http://localhost:3000/employees").subscribe((response: any) => {
      this.userDetails = response;
    });
  }

  deleteUser(userId: number) {
    this.http.delete("http://localhost:3000/employees/" + userId).subscribe(() => {
      this.http.get("http://localhost:3000/employees").subscribe((response: any) => {
        this.userDetails = response;
      })
    }, () => {
      alert("delete Function Failed...")
    })
  }

  addNewEmployee() {
    this.http.post("http://localhost:3000/employees/", {
      id: (this.userDetails.length + 100).toString(),
      userName: this.employeeName,
      userAge: this.employeeAge,
      userSalary: this.employeeSalary,
      userImage: "https://tse2.mm.bing.net/th/id/OIP.TGs2IY9TjBJUWwp08dg5ewHaDV?pid=Api&P=0&h=180"
    }).subscribe(() => {
      this.http.get("http://localhost:3000/employees").subscribe((response: any) => {
        this.userDetails = response;
        this.employeeName = "";
        this.employeeAge = 0;
        this.employeeSalary = 0;
      })
    })
  }
}
