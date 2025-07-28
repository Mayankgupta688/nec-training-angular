import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core"

@Injectable({
  providedIn: "root"
})
export class CommonDataService {
  public commonDataString: string = "Data From Service";
  public counter: number = 0;
  public employeeDetails = [];

  constructor(private http: HttpClient) {}

  getEmployeeData() {
    setInterval(() => {
      this.http.get("http://localhost:3000/employees").subscribe((response: any) => {
        this.employeeDetails = response;
      });
    }, 3000)

  }
}
