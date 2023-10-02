#include <iostream>
using namespace std;

int main() {
    int data[100];
    int total = 0;

    for (int i = 0; i < 100; i++)
    {
        cout << "Masukkan data ke-" << i + 1 << ": ";
        cin >> data[i];
        total += data[i];
    }
    
    cout << "Data yang telah dimasukkan : " << endl;
    for (int i = 0; i < 100; i++) 
    {
        cout << "Data ke-" << i + 1 << ": " << data[i] << endl;
    }

    cout << "Total dari 100 data yang telah dimasukkan adalah : " << total << endl;

    return 0;
}
