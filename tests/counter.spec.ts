import { test, expect } from '@playwright/test'

test('completed counter shows correct count', async ({ page }) => {
  await page.goto('/')

  // Add 2 tasks
  await page.getByTestId('task-input').fill('Task 1')
  await page.getByTestId('add-button').click()
  await page.getByTestId('task-input').fill('Task 2')
  await page.getByTestId('add-button').click()

  // Check initial state
  await expect(page.getByTestId('summary')).toHaveText('0 of 2 tasks completed')

  // Complete only 1 task
  await page.getByTestId('task-checkbox').first().click()

  // Should show 1 of 2, not 2 of 2
  await expect(page.getByTestId('summary')).toHaveText('1 of 2 tasks completed')
})
