# 📤 How to Push Changes to GitHub (Quick Guide)

## Step 1: Open Terminal

**Option A - VS Code Terminal:**
```
Ctrl + ` (backtick) 
atau Ctrl + Shift + ~
```

**Option B - PowerShell:**
```
Windows: Open PowerShell
Mac/Linux: Open Terminal
```

---

## Step 2: Navigate to Project Folder

```powershell
cd "d:\Documents\Portofolio"
```

Verify you're in right place:
```powershell
pwd  # Should show: d:\Documents\Portofolio
ls   # Should show: index.html, style.css, assets/, etc
```

---

## Step 3: Check Git Status

```powershell
git status
```

You should see something like:
```
On branch main

Changes not staged for commit:
  (use "git add <file>..." to stage...)
	modified:   index.html
	modified:   styles/portfolio.css

Untracked files:
  (use "git add <file>..." to include in what will be committed...)
	IMAGE_COMPRESSION_GUIDE.md
	DEPLOY_COMPARISON.md
	TODAY_SUMMARY.md
```

---

## Step 4: Add All Changes

```powershell
git add .
```

Or specific files:
```powershell
git add index.html
git add styles/portfolio.css
git add *.md
```

Verify:
```powershell
git status  # All files should be green now
```

---

## Step 5: Commit Changes

```powershell
git commit -m "Add project tags and improve SEO"
```

**Better commit messages:**
```powershell
# Good:
git commit -m "Add technology tags to project cards"
git commit -m "Improve SEO meta tags and Open Graph"

# Also good:
git commit -m "Compress images for faster loading"
git commit -m "Add skill bars to about section"

# Avoid:
git commit -m "fix"  # Too vague
git commit -m "update"  # Too vague
git commit -m "asdf"  # ???
```

---

## Step 6: Push to GitHub

```powershell
git push
```

Or specifically:
```powershell
git push origin main
```

You'll see:
```
Counting objects: 15, done.
Delta compression using up to 8 threads.
Compressing objects: 100% (8/8), done.
Writing objects: 100% (8/8), 5.42 KiB | 2.71 MiB/s, done.
Total 8 (delta 2), reused 0 (delta 0)
remote: Resolving deltas: 100% (2/2), done.
To github.com:edwindarrenhasannudin/portfolio.git
   1a2b3c..4d5e6f  main -> main
```

**Success! ✅**

---

## Step 7: Verify on GitHub

1. Go to: https://github.com/edwindarrenhasannudin/portfolio
2. Refresh page
3. Should see updated files
4. Check commit history

---

## Step 8: Check Live Website

1. Go to: https://edwindarrenhasannudin.github.io/portfolio
2. **Wait 1-2 minutes** for GitHub Pages to update
3. Refresh page (Ctrl + R or Cmd + R)
4. Clear cache if needed: Ctrl + Shift + Delete
5. Should see changes live!

---

## ⚠️ Common Issues

### Issue: "Permission denied"
**Cause:** Git not configured with GitHub credentials

**Solution:**
```powershell
git config --global user.email "your.email@gmail.com"
git config --global user.name "Your Name"
```

### Issue: "fatal: not a git repository"
**Cause:** You're not in portfolio directory

**Solution:**
```powershell
cd "d:\Documents\Portofolio"
ls .git  # Should show hidden .git folder
```

### Issue: "nothing to commit, working tree clean"
**Cause:** No changes detected

**Solution:**
```powershell
git status  # Check what changed
git add .   # Make sure to add first!
```

### Issue: Changes not showing on live website
**Cause:** Browser cache

**Solution:**
```
1. Hard refresh: Ctrl + Shift + R (not just Ctrl + R)
2. Or: Ctrl + Shift + Delete to clear cache
3. Or: Open in incognito mode
4. Wait another 2-3 minutes
```

### Issue: "error: src refspec main does not match any"
**Cause:** First push or wrong branch name

**Solution:**
```powershell
git branch  # Check current branch
git push -u origin main  # Force push to main
```

---

## 🔄 Complete Workflow

### Save & Push Changes (Full Process)

```powershell
# 1. Navigate to portfolio
cd "d:\Documents\Portofolio"

# 2. Check what changed
git status

# 3. Add all changes
git add .

# 4. Commit with message
git commit -m "Add project tags and improve SEO"

# 5. Push to GitHub
git push

# 6. Verify
# Go to: https://github.com/edwindarrenhasannudin/portfolio
# Then check: https://edwindarrenhasannudin.github.io/portfolio (after 2 min)
```

---

## 📝 Before Pushing - Checklist

- [ ] All HTML changes saved
- [ ] All CSS changes saved
- [ ] All new markdown files saved
- [ ] Tested locally (opened index.html in browser)
- [ ] No errors in console (F12)
- [ ] Images are compressed (if applicable)
- [ ] Commit message is descriptive
- [ ] Ready to push

---

## 🎯 Push Schedule

### Today (After Image Compression):
```powershell
git add .
git commit -m "Add project tags, improve SEO, compress images"
git push
```

### Later This Week:
```powershell
git add .
git commit -m "Add skill bars and hero stats"
git push
```

### Next Week:
```powershell
git add .
git commit -m "Improve project descriptions and add content"
git push
```

---

## 🔐 GitHub Authentication

If you get asked for password:

**If using HTTPS:**
```
Username: your_github_username
Password: Use personal access token (NOT your password!)
```

**Get Personal Access Token:**
1. Go to: https://github.com/settings/tokens
2. Click "Generate new token"
3. Check "repo" box
4. Generate and copy
5. Use that as password

**Better - Use SSH:**
1. Follow guide: https://docs.github.com/en/authentication/connecting-to-github-with-ssh
2. Then never need password again

---

## 📊 Git Commands Quick Reference

```powershell
# Check current status
git status

# See all changes
git diff

# Add all files
git add .

# Add specific file
git add index.html

# Commit
git commit -m "Your message"

# Push
git push

# Pull latest (if working with team)
git pull

# View commit history
git log

# View last 5 commits
git log -5

# See what changed in last commit
git show
```

---

## ✨ Pro Tips

### 1. Make commits frequently
```powershell
# Don't: Change 10 things, then commit
# Do: Commit after each logical change
```

### 2. Use descriptive messages
```powershell
# Good messages:
"Add project tags with technology colors"
"Improve SEO meta tags for social sharing"
"Compress images for better performance"

# Bad messages:
"Update" / "Fix" / "asdf"
```

### 3. Create a commit before big changes
```powershell
# If trying something risky:
git commit -m "Backup before major refactor"
# Now you can rollback if needed
```

### 4. Check before pushing
```powershell
git status  # Always check first!
git diff    # Review changes
git push    # Then push
```

---

## 🎓 Learn More

- **GitHub Docs:** https://docs.github.com/en/github/getting-started-with-github
- **Git Basics:** https://git-scm.com/book/en/v2/Getting-Started-Git-Basics
- **GitHub Pages Deploy:** https://docs.github.com/en/pages

---

## 🚀 Ready to Push?

```powershell
cd "d:\Documents\Portofolio"
git add .
git commit -m "Add project tags and improve SEO"
git push
```

**Then check your live site in 2 minutes! 🎉**

---

**Remember:** Once you push to GitHub, your changes are:
- ✅ Backed up (in GitHub)
- ✅ Version controlled (can rollback)
- ✅ Live (on your website)
- ✅ Visible to potential employers (your portfolio shows git skills!)
