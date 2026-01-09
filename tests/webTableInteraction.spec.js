 import { test, expect } from '@playwright/test';
 import users from '../data/users.json'

    test('Validate adding users and deleting the user with highest salary',async ({page})=>{

        await page.goto('https://demoqa.com/webtables');
        await expect(page).toHaveTitle('DEMOQA')      
        
        
        for(const user of users){

        await page.getByRole('button', {name : 'Add'}).click()
        await page.locator('#firstName').fill(user.firstname)
        await page.locator('#lastName').fill(user.lastname)
        await page.locator('#userEmail').fill(user.email)
        await page.locator('#age').fill(user.age)
        await page.locator('#salary').fill(user.salary)
        await page.locator('#department').fill(user.department)
        
        await page.getByRole('button', {name : 'Submit'}).click()
        }

        let found = false
        let maxSal = 0
        let deleteRecord
        let rowName
        const rows = page.getByRole('row')
        const rowCount = await rows.count()
        for(let i=1; i < rowCount; i++){
                     
            const row=rows.nth(i)
            const cells =await row.getByRole('gridcell').allTextContents()

            if(cells.every(cell => cell.trim() == '')){
                continue;
            }
            await expect(row).toContainText('example.com') 
         
            let age = Number(cells[2])
            if(age> 36){
                found = true
            }     

            let salary = Number(cells[4])
            if(salary > maxSal){
                deleteRecord = i
                rowName = await row.allTextContents()
                maxSal = salary
            }
        }
        expect(found).toBeTruthy()
        expect(deleteRecord).toBeDefined()
        await page.locator(`#delete-record-${deleteRecord}`).click()
        await expect(page.getByRole('row')).not.toContainText(rowName)
        
               
    })
